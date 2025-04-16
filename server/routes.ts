import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post('/api/contact', async (req, res) => {
    try {
      const { name, email, phone, service, message } = req.body;
      
      // Validate required fields
      if (!name || !email || !phone || !service) {
        return res.status(400).json({ 
          success: false,
          message: 'Todos os campos são obrigatórios' 
        });
      }
      
      // In a real app, you would save this to a database
      // or send an email notification
      
      return res.status(200).json({ 
        success: true,
        message: 'Mensagem recebida com sucesso!' 
      });
    } catch (error) {
      console.error('Error processing contact form:', error);
      return res.status(500).json({
        success: false,
        message: 'Erro ao processar a mensagem. Tente novamente.'
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
