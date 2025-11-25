import express from 'express'
import { PrismaClient } from './generated/prisma/client.js'
import cors from 'cors'

const prisma = new PrismaClient()
const app = express()

app.use(express.json())
app.use(cors())

app.get('/usuarios', async (req, res) => {
    let users;

    if (req.query.name || req.query.email || req.query.age) {
        users = await prisma.user.findMany({
            where: {
                name: req.query.name,
                email: req.query.email,
                age: req.query.age ? Number(req.query.age) : undefined
            }
        })
    } else {
        users = await prisma.user.findMany()
    }

    res.status(200).json(users)
})

app.post('/usuarios', async (req, res) => {
    await prisma.user.create({
        data: {
            name: req.body.name,
            email: req.body.email,
            age: req.body.age
        }
    })

    res.status(201).json(req.body)
})

app.put('/usuario/:id', async (req, res) => {
    const id = Number(req.params.id)

    try {
        const user = await prisma.user.update({
            where: { id },
            data: {
                name: req.body.name,
                email: req.body.email,
                age: req.body.age
            }
        });

        res.status(200).json(user);
    } catch (error) {
        console.error(error);

        res.status(404).json({ error: "Usuário não encontrado ou erro ao atualizar." });
    }
})

app.delete('/usuario/:id', async (req, res) => {
    const id = Number(req.params.id)

    try {
        const user = await prisma.user.delete({
            where: { id },
        })

        res.status(200).json({ message: "Usuário deletado com sucesso!" })
    } catch (error) {
        console.error(error)
        res.status(404).json({ error: "Usuário não encontrado ou erro ao remover." })
    }
})

app.listen(3000, () => {
    console.log('Server running on port 3000')
})