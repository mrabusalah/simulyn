import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";
import { insertContactSchema } from "@shared/schema";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  
  app.post("/api/contact", async (req, res) => {
    try {
      const contactData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(contactData);
      
      res.json({ 
        success: true, 
        message: "تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.",
        contact: contact
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "يرجى التأكد من صحة البيانات المدخلة",
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى." 
        });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
