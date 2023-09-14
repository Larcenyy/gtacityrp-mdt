export let listeCitoyenData = [
    {
        citizenId: 1, // ID du citoyen
        title: "BIDULE FOUFOU",
        dateBirthday: "01/01/1999",
        sexe: "Homme",
        age: "18",
        adresse: "6 rue de Los Santos",
        profession: "Chômeur",
        naissance: "Los Santos",
        taille: 180,
        masse: 80,
        nationalite: "Américaine",
        vehicule: "BMW E34",
        phone: "724-000",

        permisVehicle: true,
        permisAir: true,
        permisBoat: true,

        permisPistol: true,
        permisSmg: false,
        permisShotgun: false,
        permisRifle: true,
        permisSnip: true,
    },
    {
        citizenId: 2, // ID du citoyen
        title: "JHON LAWNY",
        dateBirthday: "15/12/2009",
        sexe: "Femme",
        age: "28",
        adresse: "6 rue de JeSaisPas",
        profession: "LSPD",
        naissance: "San Fierro",
        taille: 165,
        masse: 55,
        nationalite: "Russe",
        vehicule: "AUDI Q8",
        phone: "654-854",
        permisVehicle: true,
        permisAir: true,
        permisBoat: true,

        permisPistol: true,
        permisSmg: false,
        permisShotgun: false,
        permisRifle: true,
        permisSnip: true,
    },
    {
        citizenId: 3, // ID du citoyen
        title: "MARIO PABLO",
        dateBirthday: "15/12/2009",
        sexe: "Femme",
        age: "28",
        adresse: "6 rue de JeSaisPas",
        profession: "LSPD",
        naissance: "San Fierro",
        taille: 165,
        masse: 55,
        nationalite: "Russe",
        vehicule: "AUDI Q8",
        phone: "654-854",
        permisVehicle: true,
        permisAir: true,
        permisBoat: true,

        permisPistol: true,
        permisSmg: false,
        permisShotgun: false,
        permisRifle: true,
        permisSnip: true,
    }
];
export function supprimerCitoyenParId(citizenId) {
    // Utilisez la méthode filter pour créer un nouveau tableau sans le citoyen
    listeCitoyenData = listeCitoyenData.filter(citizen => citizen.citizenId !== citizenId);
}