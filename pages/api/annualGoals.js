import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export default async (req, res) => {
    if(req.method === 'POST') {
        res.status(200).json('to be built later')
    }
    if(req.method === 'DELETE') {
        res.status(200).json('to be built later')
    }
    if(req.method === 'PUT') {
        res.status(200).json('to be built later')
    }

    //if no other req methods, then assumes it is a GET function
    let annualGoals = null;
    //if no user request body, then skip
    if(!req.body.user) {
        res.status(400).json('no user provided');
        return;
    }
    try {
        annualGoals = await prisma.annualGoal.findMany({
            where: { userId: req.body.user.uid }
        });
    } catch (error) {
        console.error(error);
    }
    res.status(200).json(annualGoals);
    return;
}