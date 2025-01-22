import CheckoutContainer from '@/components/checkout/checkout.container'
import QualiteContainer from '@/components/shop/qualite/qualite.container'
import ShobLink from '@/components/shop/shobLink/shobLink'
import Layout from '@/ui/components/layout/layout'
import Seo from '@/ui/components/seo/seo'
import React from 'react'

export default function Checkout() {
  return (
    <>
          <Seo title="BOUTIQUE" description="Caisse en ligne" />
    
          <Layout isDisplayCreadCrumbs={false}>
            <ShobLink />
            <CheckoutContainer/>
            <QualiteContainer/>
          </Layout>
        </>
  )
}
