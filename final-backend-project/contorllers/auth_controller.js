const createUser = (req, res) => {

    const { username, password } = req.body
    if (!username || !password) {
      return  res.status(400).json({
            message: "اطلاعات ورودی مشکل دارد",
        })
    }
    res.status(200).json({
        message: " ثبت نام موفقیت آمیز بود",
    })
}

const loginUser = (req, res) => {

    const { username, password } = req.body

    if (username !== "admin" || password !== "admin1234") {
        return res.status(400).json({ message: "نام کاربری یا رمز عبور اشتباه است" })
    }

    const token = `s%3AeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoic3NzIiwidXNlcklkIjoiNjZkYmYwNjM0MTU3MjFkNWUxOWJkMmVkIiwicm9sZSI6InVzZXIiLCJpYXQiOjE3MjU2ODk5NTUsImV4cCI6MTcyNTY5MzU1NX0.uAIbFt9Vd_o0TDDTJG4idWfc1yzsZ7n9jeHKBWZelYU.bxH5TpR%2BJoNnT09iUkzPi9lF8hIxlOowhnPPhfyGmh8`
    res.status(200).json({
        message: "ورود موفقیت آمیز بود",
        username,
        token
    })

}

module.exports = {
    createUser,
    loginUser
}