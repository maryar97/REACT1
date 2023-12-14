<?php

namespace App\DataFixtures;

use App\Entity\Client;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        // $product = new Product();
        // $manager->persist($product);



        $client1 = new Client();
        $client1->setNom('Galbiati')
            ->setPrenom('Yvette');
            $manager->persist($client1);

        $client2 = new Client();
        $client2->setNom('Dro')
            ->setPrenom('laure');
            $manager->persist($client2);

            $manager->flush();
    }
}
