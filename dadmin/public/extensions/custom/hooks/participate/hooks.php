<?php
use Directus\Application\Application;
use Directus\Services\ItemsService;
use Directus\Hook\HookInterface;
use Directus\Mail\Message;
use function Directus\send_mail_with_template;

return [
    'actions' => [
        'item.create.participants' => function ($data) {
            
            $container = Application::getInstance()->getContainer();
            $itemsService = new ItemsService($container);

            send_mail_with_template('register-success.twig', $data, function (Message $message) {
                $message->setSubject('SFC Paskong Pinoy Registration Confirmation');
                
                $message->setTo($data['email']);
            });

            echo 'pass mail';
        }
    ],
    'filters' => [
        'item.create.participants:before' => function (\Directus\Hook\Payload $payload) {

            // // List of collections that doesn't need owner field
            // $whiteList = ['api_cache', 'global_settings', 'partner_enquiries', 'media_release_enquiries'];

            // //Check if this is a system collection, and pass it transparently
            // $collection_name = $payload->attribute('collection_name');
            // if (in_array($collection_name, SchemaManager::getSystemCollections()) || in_array($collection_name, $whiteList)) {
            //     return $payload;
            // } else {
            // //Get the ID of the user that created the item
            //     $user_id = $payload->get('created_by');

            //     if(!$user_id){
            //         return $payload;
            //     }

            // //if created_by is not found / public request
            //     //Initialise the DB Access API to read data
            //         $container = \Directus\Application\Application::getInstance()->getContainer();
            //         $itemsService = new \Directus\Services\ItemsService($container);

            //     //Get the related User Role for the user ID provided
            //         $roles_params = ['filters' => array('user' => $user_id)];
            //         $user_role_data = $itemsService->findOne('directus_user_roles', $roles_params);
            //         $role_id = $user_role_data['data']['role'];

            //     //Get the user role name for the returned role ID, then limit to 3 characters lowercase
            //         $params = [];
            //         $role = $itemsService->find('directus_roles', $role_id, $params);
            //         $role_name = strtolower(substr($role['data']['name'],0,3));

            //     //Set the payload to include the role name
            //         $payload->set('owner', $role_name);
                    
            // // make sure to return the payload
            //     return $payload;
            // }
        }
    ]
];
