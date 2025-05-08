<?php
$apiKey = "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";

$data = json_decode(file_get_contents("php://input"), true);
$userMessage = $data["prompt"] ?? "Hello!";

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, "https://api.openai.com/v1/chat/completions");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);

$postData = [
    "model" => "gpt-4o-mini",
    "messages" => [
        ["role" => "user", "content" => $userMessage]
    ],
    "temperature" => 0.7
];

curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($postData));
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "Content-Type: application/json",
    "Authorization: Bearer $apiKey"
]);

$response = curl_exec($ch);
curl_close($ch);

$responseData = json_decode($response, true);
$outputText = $responseData["choices"][0]["message"]["content"] ?? "Sorry, I couldn't understand your request.";

echo json_encode(["output_text" => $outputText]);
?>
