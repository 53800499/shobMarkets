/** @format */

import Seo from "@/ui/components/seo/seo";

import Layout from "@/ui/components/layout/layout";
import ForgetPasswordContainer from "@/ui/modules/authentication/forfet-password/forget-password.container";
import Breadcrumbs from "@/ui/components/breadcrumbs/breadcrumbs";

export default function MotsDePassePerdue() {
  return (
    <>
      <Seo title="Mot de passe oublié" description="Shopimarket" />
      <Layout isDisplayCreadCrumbs={false}>
        <Breadcrumbs />
        <ForgetPasswordContainer />
      </Layout>
    </>
  );
}
