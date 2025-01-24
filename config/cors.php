<?php

return [
    'paths' => ['api/*', 'sanctum/csrf-cookie'], // Apply CORS to API routes and Sanctum

    'allowed_methods' => ['*'], // Allow all HTTP methods (GET, POST, PUT, DELETE, OPTIONS, etc.)

    'allowed_origins' => ['*'], // Allow all origins (frontend apps, Postman, etc.)

    'allowed_origins_patterns' => [], // Allow specific patterns if needed

    'allowed_headers' => ['*'], // Allow all headers (Authentication, Content-Type, etc.)

    'exposed_headers' => [], // No additional headers exposed

    'max_age' => 0, // Cache duration in seconds (0 = no cache)

    'supports_credentials' => false, // Set to true if using authentication cookies

];

