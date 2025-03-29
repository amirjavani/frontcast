const authenticateUser = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return  res.status(401).json({message:"احراز هویت موفقیت آمیز نبود"})

        }

        const token = authHeader.split(' ')[1];
        const tokenJwt = `s%3AeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoic3NzIiwidXNlcklkIjoiNjZkYmYwNjM0MTU3MjFkNWUxOWJkMmVkIiwicm9sZSI6InVzZXIiLCJpYXQiOjE3MjU2ODk5NTUsImV4cCI6MTcyNTY5MzU1NX0.uAIbFt9Vd_o0TDDTJG4idWfc1yzsZ7n9jeHKBWZelYU.bxH5TpR%2BJoNnT09iUkzPi9lF8hIxlOowhnPPhfyGmh8`

        if (token !== tokenJwt) {
           return res.status(401).json({message:"احراز هویت موفقیت آمیز نبود"})

        }
        next();
    } catch (error) {
        next(error);
    }
};

module.exports =  authenticateUser 