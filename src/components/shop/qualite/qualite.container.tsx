import Container from '@/ui/components/container/container'
import React from 'react'
import Qualite from './qualite'

export default function qualiteContainer() {
  return (
    <Container className='flex justify-center h-32 bg-primary-1'>
      <Qualite src='/assets/images/qualite1.png' alt='Qualité' description1='Haute qualité' description2='Conçu à partir de matériaux de qualité supérieure'/>
      <Qualite src='/assets/images/qualite2.png' alt='Qualité' description1='Protection de garantie' description2='Plus de 2 ans'/>
      <Qualite src='/assets/images/qualite3.png' alt='Qualité' description1='Livraison gratuite' description2='Commande de plus de 150 $'/>
      <Qualite src='/assets/images/qualite4.png' alt='Qualité' description1='Assistance 24h/24 et 7j/7' description2='Assistance dédiée'/>
    </Container>
  )
}
