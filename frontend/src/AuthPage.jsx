import axios from "axios"

const AuthPage = (props) => {

    const onSubmit = (e) => {
      e.preventDefault();
      const { value } = e.target[0];
      axios.post(
        "http://localhost:3001/authenticate",
        {username : value},
        {headers: {'Content-Type': 'application/json'}}
        )
        .then(r => props.onAuth({ ...r.data,  secret :value}))
        .catch(e => console.log("error", e))
      
    };
  
    return (
      <div className="background">
        <form onSubmit={onSubmit} className="form-card">
          <div className="form-title">Bienvenue👋</div>
  
          <div className="form-subtitle">Définissez un nom d'utilisateur pour commencer</div>
  
          <div className="auth">
            <div className="auth-label">Pseudo</div>
            <input className="auth-input" name="username" />
            <button className="auth-button" type="submit">
              Entrer
            </button>
          </div>
        </form>
      </div>
    );
  };
  
  export default AuthPage;