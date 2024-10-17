class ScriptStorage {
    private static instance: ScriptStorage;
    private script: string;
    private isRequestSent: boolean = false;  // Estado para saber si ya se envió la petición
  
    // Constructor privado para evitar múltiples instancias
    private constructor() {
      this.script = ''; // Inicializamos el script vacío
    }
  
    // Método para obtener la instancia del singleton
    public static getInstance(): ScriptStorage {
      if (!ScriptStorage.instance) {
        ScriptStorage.instance = new ScriptStorage();
      }
      return ScriptStorage.instance;
    }
  
    // Establecer el script generado
    public setScript(script: string) {
      this.script = script;
    }
  
    // Obtener el script generado
    public getScript(): string {
      return this.script;
    }
  
    // Función para verificar si ya se envió la petición
    public async sendScriptToAPI() {
      if (this.isRequestSent) {
        console.log("La solicitud ya ha sido enviada previamente.");
        return;
      }
  
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
  
      const raw = JSON.stringify({
        "clarification": this.script,  // El script que has generado
        "conversation_id": "91974356-2945-4182-8083-cd25b51e7627"  // ID de conversación
      });
  
      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow" as RequestRedirect,
      };
  
      try {
        const response = await fetch("http://127.0.0.1:5000/clarification_request", requestOptions);
        
        if (!response.ok) {
          console.error("Error en la respuesta del servidor:", response.status, response.statusText);
          return;
        }
  
        const result = await response.text();
        console.log("Respuesta del servidor:", result);
  
        // Marcar la petición como enviada
        this.isRequestSent = true;
        return result;
      } catch (error) {
        console.error("Error al enviar el script a la API:", error);
      }
    }
  }
  
  export default ScriptStorage;
  