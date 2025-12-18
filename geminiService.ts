
import { GoogleGenAI, Type } from "@google/genai";

export async function getTravelTips(from: string, to: string) {
  // Always use {apiKey: process.env.API_KEY} for initializing GoogleGenAI
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Provide 3 quick, short travel tips for a bus journey from ${from} to ${to}. Focus on weather at destination, what to pack, and a popular food item to try.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            weather: { type: Type.STRING },
            packing: { type: Type.STRING },
            food: { type: Type.STRING }
          },
          required: ["weather", "packing", "food"]
        }
      }
    });
    
    // .text is a property, not a method. Safely handle potential undefined values.
    const jsonStr = response.text?.trim();
    if (!jsonStr) return null;
    return JSON.parse(jsonStr);
  } catch (error) {
    console.error("Gemini Error:", error);
    return null;
  }
}
