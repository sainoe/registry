register-consumer:
	registryd tx registry register-consumer cosmos:consumer1 --from alice -y

subscribe-alice:
	registryd tx registry subscribe-validator cosmos:consumer1 --from alice -y
	
subscribe-bob:
	registryd tx registry subscribe-validator cosmos:consumer1 --from bob -y

unsubscribe-alice:
	registryd tx registry unsubscribe-validator cosmos:consumer1 --from alice -y

consumers:
	registryd q registry list-consumer

subscriptions:
	registryd q registry list-subscription