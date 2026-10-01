const z = require('zod');

const registerSchema = z.object({
  full_name: z
    .string({ required_error: 'Le nom complet est obligatoire' })
    .min(3, { message: 'Le nom doit contenir au moins 3 caractères' })
    .max(50, { message: 'Le nom ne doit pas dépasser 50 caractères' })
    .regex(/[a-z]/)
    .trim(),

  email: z
    .string({ required_error: "L'email est obligatoire" })
    .email({ message: "Format d'email invalide" })
    .trim()
    .toLowerCase(),

  password: z
    .string({ required_error: 'Le mot de passe est obligatoire' })
    .min(8, { message: 'Le mot de passe doit contenir au moins 8 caractères' })
    .regex(/[A-Z]/, { message: 'Le mot de passe doit contenir au moins une lettre majuscule' })
    .regex(/[a-z]/, { message: 'Le mot de passe doit contenir au moins une lettre minuscule' })
    .regex(/[0-9]/, { message: 'Le mot de passe doit contenir au moins un chiffre' })
});

const loginSchema = z.object({
  email: z
    .string({ required_error: "L'email est obligatoire" })
    .email({ message: "Format d'email invalide" })
    .trim()
    .toLowerCase(),
  password: z
    .string({ required_error: 'Le mot de passe est obligatoire' })
    .min(8, { message: 'Le mot de passe doit contenir au moins 8 caractères' })
    .regex(/[A-Z]/, { message: 'Le mot de passe doit contenir au moins une lettre majuscule' })
    .regex(/[a-z]/, { message: 'Le mot de passe doit contenir au moins une lettre minuscule' })
    .regex(/[0-9]/, { message: 'Le mot de passe doit contenir au moins un chiffre' })

})



module.exports = { registerSchema ,loginSchema }
