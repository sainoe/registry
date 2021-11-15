register-consumer1:
	registryd tx registry register-consumer cosmos:consumer1 --from alice -y

register-consumer2:
	registryd tx registry register-consumer cosmos:consumer2 --from alice -y

subscribe-alice:
	registryd tx registry subscribe-validator cosmos:consumer1 --from alice -y --log_level panic --trace

subscribe2-alice:
	registryd tx registry subscribe-validator cosmos:consumer2 --from alice -y --log_level panic --trace

subscribe-bob:
	registryd tx registry subscribe-validator cosmos:consumer1 --from bob -y -y --log_level panic --trace

subscribe2-bob:
	registryd tx registry subscribe-validator cosmos:consumer2 --from bob -y -y --log_level panic --trace

unsubscribe-alice:
	registryd tx registry unsubscribe-validator cosmos:consumer1 --from alice -y --log_level panic --trace

unsubscribe-bob:
	registryd tx registry unsubscribe-validator cosmos:consumer1 --from bob -y --log_level panic --trace

consumers:
	registryd q registry list-consumer

subscriptions:
	registryd q registry list-subscription