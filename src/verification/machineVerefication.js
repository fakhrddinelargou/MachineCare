const { z } = require('zod');

const createMachineSchema = z.object({
    reference: z
        .string({ required_error: 'La référence est obligatoire' })
        .trim()
        .min(2, { message: 'La référence ne peut pas être vide' }),

    name: z
        .string({ required_error: 'Le nom est obligatoire' })
        .trim()
        .min(2, { message: 'Le nom doit contenir au moins 2 caractères' }),

    workshop: z
        .string({ required_error: "L'atelier est obligatoire" })
        .trim()
        .min(2, { message: "L'atelier doit contenir au moins 2 caractères" }),

    status: z
        .enum(['disponible', 'en maintenance', 'hors service'], {
            errorMap: () => ({ message: 'Statut invalide' }),
        })
        .optional(),
});




const objectIdSchema = z.string().refine(
  (val) => /^[0-9a-fA-F]{24}$/.test(val),
  { message: "Invalid ObjectId" }
);
module.exports = { createMachineSchema , objectIdSchema };