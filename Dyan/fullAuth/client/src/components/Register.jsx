const Register = () => {
  return (
    <>
      <form style={{
        width: "fit-content"
      }}>
        <fieldset>
          <legend>Register :</legend>

          <input type="text" name="username" placeholder="Username" />
          <br /><br />
          <input type="email" name="email" placeholder="Email" />
          <br /><br />
          <input type="password" name="pass" placeholder="Password" />
          <br /><br />
          <input type="text" name="conPass" placeholder="Conform Password" />
          <br /><br />
          <input type="submit" value="Register" />
        </fieldset>
      </form>
    </>
  )
}

export default Register