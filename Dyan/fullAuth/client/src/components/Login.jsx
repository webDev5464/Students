const Login = () => {
  return (
    <>
      <form style={{
        width: "fit-content"
      }}>
        <fieldset>
          <legend>Login :</legend>

          <input type="text" name="username" placeholder="Username" />
          <br /><br />
          <input type="password" name="pass" placeholder="Password" />
          <br /><br />
          <input type="submit" value="Register" />
        </fieldset>
      </form>
    </>
  )
}

export default Login