register-consumer:
	registryd tx registry register-consumer cosmos:consumer1 --from alice -y

subscribe-alice:
	registryd tx registry subscribe-validator cosmos:consumer1 --from alice -y --log_level panic --trace
	
subscribe-bob:
	registryd tx registry subscribe-validator cosmos:consumer1 --from bob -y -y --log_level panic --trace

unsubscribe-alice:
	registryd tx registry unsubscribe-validator cosmos:consumer1 --from alice -y --log_level panic --trace

consumers:
	registryd q registry list-consumer

subscriptions:
	registryd q registry list-subscription