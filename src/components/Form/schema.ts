import { z } from "zod";

export const formSchema = z.object({
  image: z.string().url({ message: "A Imagem é obrigatória." }),
  name: z.string().trim().min(1, { message: "O nome é obrigatório." }),
  message: z.string().trim().min(1, { message: "A mensagem é obrigatória." })
});

export type FormValues = z.infer<typeof formSchema>;
