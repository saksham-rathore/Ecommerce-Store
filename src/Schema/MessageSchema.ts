import {z} from "zod"

export const MessageSchema = z.object({
    content: z.string()
    .min(10, {message: "Content must be at least 20 characters"})
    .max(300, {message: "Content must be no longer than 300 characters"})
})