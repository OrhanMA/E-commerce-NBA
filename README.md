# Projet final DWWM - E-commece NBA

Voici mon projet final pour la formation développement web et web mobile (DWWM) que j'ai suivi sur l'année 2023.

Ce projet constitue la conclusion de la formation mais aussi une condition du passage à l'examen du titre profesionnel (titre RNCP de niveau 5).

## Stack technique

Pour le projet, j'ai décidé d'utiliser [React](https://react.dev/) (avec [Inertia](https://inertiajs.com/)) en front et [Laravel](https://laravel.com/) en back, les deux framework avec lesquels j'ai le plus d'expérience au moment de la réalisation du projet.

Pour la base de données, j'ai utilisé [MySQL](https://www.mysql.com/fr/) car c'est avec elle que j'ai le plus de facilité pour l'instant. En dehors de mes considérations personnelles, MySQL s'intègre très facilement à MySQL, ce qui en a fait un choix facile.

Pour le style, j'ai utilisé [Tailwind CSS](https://tailwindcss.com/). Tailwind permet de créer des interfaces très rapidement grâces à ces classes utilitaires.

Le combo Tailwind-React est très intéressant pour ce genre de projet.

J'ai aussi utilisé [Mailtrap](https://mailtrap.io/) pour intercepter les mails. Vous aurez besoin de le mettre en place pour que le système de mail fonctionne.

Vous pouvez consulter la liste des dépendances dans le fichier ```package.json``````.

## Installation

Pour installer le projet, veuillez suivre les étapes suivantes:

```
git clone git@github.com:OrhanMA/E-commerce-NBA.git
cd E-commerce-NBA
npm install
composer install
```

### Modifiez le .env

```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=<port>
DB_DATABASE=<database-name>
DB_USERNAME=<database-username>
DB_PASSWORD=<database-password>

MAIL_MAILER=smtp
MAIL_HOST=sandbox.smtp.mailtrap.io
MAIL_PORT=<votre port>
MAIL_USERNAME=<voir votre mailtrap>
MAIL_PASSWORD=<voir votre mailtrap>
MAIL_ENCRYPTION=null
MAIL_FROM_ADDRESS=<mettre votre adresse>
MAIL_FROM_NAME="${APP_NAME}"
```

### config/filesystems.php

```
'links' => [
        public_path('storage') => storage_path('app/public'),
    ],
```

Vous aurez peut-être besoin de créer un lien de storage avec
`php artisan storage:link`

### config/mail.php

```
    'from' => [
        'address' => env('MAIL_FROM_ADDRESS', 'votre adresse par défault'),
        'name' => env('MAIL_FROM_NAME', 'Nom du E-commerce'),
    ],
```

### Run les migrations:

```
php artisan migrate
```

### Exécutez les fixtures:

```
php artisan migrate:refresh --seed
```

### Vérifier sa connexion MySQL

vous pouvez vérifier votre connexion avec MySQL avec ces commandes:

```
php artisan tinker
```

Cela va vous ouvrir une session dans le terminal. Entrez cette commande:

```
DB::connection()->getPDO();
```

Vous pouvez quitter cette sesssion avec `exit;` ou CTRL+C.

### Ajoutez un administrateur

Vous pouvez ajouter un utilisateur en tant qu'admin en modifiant son champ is_admin dans votre base de données.

### Lancez le projet

Ouvrez deux instances pour pouvoir lancer les deux commandes suivantes.

```
npm run dev
php artisan serve
```

Vous aurez peut-être besoin d'exécuter ces commandes en tant qu'utilisateur.
