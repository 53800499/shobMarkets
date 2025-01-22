  /** @format */

  import Container from "@/ui/components/container/container";
  import Button from "@/ui/designSystem/button/button";
  import { Input } from "@/ui/designSystem/forms/input";
  import Typography from "@/ui/designSystem/typography/typography";
  import { useForm, SubmitHandler } from "react-hook-form";

  interface FormData {
    nom: string;
    prenom: string;
    nomEntreprise: string;
    continant: string;
    adresseRue: string;
    ville: string;
    province: string;
    codePostal: string;
    numeroTelephone: string;
    adresseMail: string;
  }

  const CheckoutContainer = () => {
    const {
      register,
      handleSubmit,
      formState: { errors }
    } = useForm<FormData>();

    const onSubmit: SubmitHandler<FormData> = (data) => {
      console.log("Données soumises :", data);
    };

    // Configuration des champs du formulaire
    const fields: {
      id: string;
      label: string;
      placeholder: string;
      type: "text" | "email" | "password" | "tel"; // Ajoutez "tel" si nécessaire
      required: boolean;
    }[] = [
      {
        id: "nom",
        label: "Nom",
        placeholder: "Votre nom",
        type: "text",
        required: true
      },
      {
        id: "prenom",
        label: "Prénom",
        placeholder: "Votre prénom",
        type: "text",
        required: true
      },
      {
        id: "nomEntreprise",
        label: "Nom de l'entreprise (Optionnel)",
        placeholder: "Nom de l'entreprise",
        type: "text",
        required: true
      },
      {
        id: "continant",
        label: "Continent",
        placeholder: "Continent / Région",
        type: "text",
        required: true
      },
      {
        id: "adresseRue",
        label: "Adresse",
        placeholder: "Adresse de la rue",
        type: "text",
        required: true
      },
      {
        id: "ville",
        label: "Ville",
        placeholder: "Ville",
        type: "text",
        required: true
      },
      {
        id: "province",
        label: "Province",
        placeholder: "Province",
        type: "text",
        required: true
      },
      {
        id: "codePostal",
        label: "Code postal",
        placeholder: "Code postal",
        type: "text",
        required: true
      },
      {
        id: "numeroTelephone",
        label: "Téléphone",
        placeholder: "Numéro de téléphone",
        type: "tel", // Ajoutez "tel" pour téléphone
        required: true
      },
      {
        id: "adresseMail",
        label: "Email",
        placeholder: "Adresse mail",
        type: "email",
        required: true
      }
    ];

    // Fonction pour rendre un champ d'entrée
    const renderInputField = (field: (typeof fields)[number]) => (
      <div key={field.id} className="space-y-1">
        <Input
          placeholder={field.placeholder}
          type={field.type}
          register={register}
          errors={errors}
           id={field.id as keyof FormData}
          errorMsg={`Veuillez entrer ${field.label.toLowerCase()}`}
          required={true}
          className="h-10 p-2"
          aria-label={field.label}
        />
      </div>
    );

    return (
      <Container className="py-12">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-8">
              <Typography variant="h5" component="h1">
                Détails de la facturation
              </Typography>
              {fields.map(renderInputField)}
            </div>

            <div className="space-y-6">
              <div>
                <div className="flex justify-between">
                  <Typography variant="h3" component="h3">
                    Produits
                  </Typography>
                  <Typography variant="h3" component="h3">
                    Totals
                  </Typography>
                </div>
                <div className="flex justify-between mt-2">
                  <Typography variant="body" component="span">
                    Total
                  </Typography>
                  <Typography variant="body" component="span" theme="primary">
                    121553
                  </Typography>
                </div>
              </div>

              <hr className="border-gray-3" />

              <Typography
                variant="body-base"
                component="p"
                className=" text-jutify text-gray-3"
              >
                Effectuez votre paiement directement sur notre compte bancaire.
                Veuillez utiliser votre identifiant de commande comme référence de
                paiement. Votre commande ne sera expédiée qu{"'"}une fois les
                fonds crédités sur notre compte.
              </Typography>
              <Typography
                variant="body-base"
                component="p"
                className=" text-jutify text-gray-3"
              >
                Vos données personnelles seront utilisées pour soutenir votre
                expérience sur ce site web, gérer l{"'"}accès à votre compte et
                pour d{"'"}autres fins décrites dans notre
                <span className="font-weight-bold">
                  politique de confidentialité
                </span>{" "}
                .
              </Typography>

              <Button variant="outline" size="small" className="rounded">
              PASSER COMMANDE</Button>
              <button
                type="submit"
                className="w-full px-4 py-2 text-white bg-primary rounded hover:bg-primary-dark"
              >
                PASSER COMMANDE
              </button>
            </div>
          </div>
        </form>
      </Container>
    );
  };

  export default CheckoutContainer;
