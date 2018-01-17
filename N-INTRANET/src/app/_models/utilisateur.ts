export class Utilisateur {
    Id: string;
    Civilite: string;
    Nom: string;
    Prenom: string;
    Email: string;
    Login: string;
    TelephoneP: string;
    UserName: string;

    constructor(IdUtilisateur: string ,
        NomUtilisateur: string,
        PrenomUtilisateur: string ,
        CiviliteUtilisateur: string ,
        EmailUtilisateur: string,
        LoginUtilisateur: string ,
        TelephoneUtilisateur: string,
        UsernameUtilisateur: string  ) {
            this.Id = IdUtilisateur;
            this.Civilite = CiviliteUtilisateur;
            this.Nom = NomUtilisateur;
            this.Prenom = PrenomUtilisateur;
            this.Email = EmailUtilisateur;
            this.TelephoneP = TelephoneUtilisateur;
            this.UserName = UsernameUtilisateur;
    }
}
