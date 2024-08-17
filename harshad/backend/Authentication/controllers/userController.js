//! Register
export const register = async (req, res) => {
  try {
    const { fullName, username, email, pass, conPass } = req.body;
    // console.log(req.body);

    if (!fullName) throw new Error("Full name is required.");
    if (!username) throw new Error("Username is required.");
    if (!email) throw new Error("Email is required.");
    if (!pass) throw new Error("Password is required.");
    if (!conPass) throw new Error("Confirm password is required.");
    if (pass !== conPass) throw new Error("Passwords do not match.");

    //TODO :- Jo user already register hoy to res send karido ( user already exist )

    res.status(200).send({
      process: true,
      resMsg: "Register successfully...",
    });
  } catch (err) {
    res.status(400).send({
      process: false,
      resMsg: err.message,
    });
  }
};
