const {z} = require('zod');




const updateUserSchema = z.object({
      full_name: z
        .string({ required_error: 'Le nom complet est obligatoire' })
        .min(3, { message: 'Le nom doit contenir au moins 3 caractères' })
        .max(50, { message: 'Le nom ne doit pas dépasser 50 caractères' })
        .toLowerCase()
        .regex(/[a-z]/)
        .trim()
        .optional(),

      email: z
        .string({ required_error: "L'email est obligatoire" })
        .email({ message: "Format d'email invalide" })
        .trim()
        .toLowerCase()
        .optional(),
})



module.exports = {updateUserSchema}