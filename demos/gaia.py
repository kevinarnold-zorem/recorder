from flask import Flask, request, jsonify
from flask_cors import CORS
import base64
from striprtf.striprtf import rtf_to_text
from io import BytesIO
import re
import requests
import json
import time

app = Flask(__name__)
CORS(app)

# Función para obtener el token de acceso
def get_access_token():
    try:
        # Encabezados para la solicitud
        headers = {
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept": "application/json",
            "Origin": "https://gaia.axet.emeal.nttdata.com",
            "Cookie": "JSESSIONID=8E38975C3FD4FE22BB9D66745AD32E9A"
        }

        # Parámetros del cuerpo de la solicitud
        data = {
            "grant_type": "refresh_token",
            "refresh_token": "sNViQAEX28L_X35bas51wrAedDNeu6RJRSUIrxBUJpI",
            "client_id": "0oafbxnffaeuydB7l417",
            "scope": "offline_access openid"
        }

        # Realizar la solicitud POST
        response = requests.post(
            "https://onentt.okta.com/oauth2/ausf3mzucjRGKYWLy417/v1/token",
            headers=headers,
            data=data
        )

        # Verificar si la respuesta es exitosa
        if response.status_code == 200:
            return response.json().get('access_token')
        else:
            return None

    except Exception as e:
        print(f"Error obteniendo el token: {str(e)}")
        return None

# Función para obtener la respuesta por ID con reintentos
def get_response_by_id(access_token, response_id, max_attempts=5, delay=0.3):
    try:
        # Encabezados para la solicitud GET
        headers = {
            "Authorization": f"Bearer {access_token}",
            "Cookie": "TiPMix=36.52003659411227; x-ms-routing-name=self"
        }

        url = f"https://api.gaia.axet.emeal.nttdata.com/api/answer-responses/{response_id}"

        # Intentar obtener la respuesta hasta 5 veces
        for attempt in range(1, max_attempts + 1):
            response = requests.get(url, headers=headers)

            if response.status_code == 200:
                response_json = response.json()

                # Si el estado es 'DONE', devolver la respuesta
                if response_json.get('status') == 'DONE':
                    return response_json.get('response')

                # Si el estado es 'PENDING', esperar y reintentar
                elif response_json.get('status') == 'PENDING':
                    print(f"Intento {attempt}: El estado es PENDING, reintentando en {delay} segundos...")
                    time.sleep(delay)  # Esperar antes de reintentar

                else:
                    return {'error': 'Estado inesperado', 'status': response_json.get('status')}
            else:
                return {'error': 'Error en la solicitud', 'details': response.text}

        # Si se alcanzaron los 5 intentos y no se logró un estado DONE
        return {'error': f"No se pudo obtener el estado DONE después de {max_attempts} intentos"}

    except Exception as e:
        return {'error': str(e)}
    
        
# Ruta principal para verificar el estado de la API
@app.route('/')
def index():
    return jsonify({'message': 'La API está activa'}), 200


@app.route('/clarification_request', methods=['POST'])
def clarification_request():
    try:
        access_token = get_access_token()
        if not access_token:
            return jsonify({'error': 'No se pudo obtener el access_token'}), 500

        clarification = request.json.get('clarification')
        conversation_id = request.json.get('conversation_id')

        if not clarification:
            return jsonify({'error': 'No se proporcionó el parámetro clarification'}), 400
        if not conversation_id:
            return jsonify({'error': 'No se proporcionó el parámetro conversation_id'}), 400

        headers = {
            "Content-Type": "application/json",
            "Authorization": f"Bearer {access_token}",
            "Cookie": "TiPMix=36.52003659411227; x-ms-routing-name=self"
        }

        body = {
            "clarification": clarification
        }

        url = f"https://api.gaia.axet.emeal.nttdata.com/api/answer-requests/{conversation_id}/clarification"

        response = requests.post(url, headers=headers, data=json.dumps(body))

        if response.status_code == 200:
            response_json = response.json()
            response_id = response_json.get('id')

            if not response_id:
                return jsonify({'error': 'No se encontró el response_id en la respuesta'}), 500

            # Obtener la respuesta por el ID con reintentos
            response_data = get_response_by_id(access_token, response_id)

            return jsonify(response_data), 200
        else:
            return jsonify({'error': 'Error en la segunda solicitud', 'details': response.text}), response.status_code

    except Exception as e:
        return jsonify({'error': str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True)
