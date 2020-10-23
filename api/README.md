To be completed...



ping:

    GET 127.0.0.1:5000/api/ping

    body:

        empty

    response:

        {"status": "OK"}


create:

    POST 127.0.0.1:5000/api/create

    body:

        {"name" : "rex"}

    response:

        "{'name' : 'rex', 'handle' : 'rex#1496', 'token' : '56a8c0c4-7b30-4177-bc89-6665127ccef1'}"

capture:

    POST 127.0.0.1:5000/api/capture

    body:

        {"token" : "d6821063-cdd4-4c30-8c5f-05019615d82e", "flags" : "10", "points" : "1000"}

    response:

        {"status": "OK"}

leaders:

    POST 127.0.0.1:5000/api/leaders

    body:

        {"token" : "9715e270-5358-43ed-9fee-5f4d9e89502f"}

    response:

        "{'name' : 'don', 'handle' : 'don#4321', 'flags' : '10' 'points' : '1000'},{'name' : 'bob', 'handle' : 'bob#1234', 'flags' : '10' 'points' : '1000'},{'name' : 'smith', 'handle' : 'smith#1494', 'flags' : '0' 'points' : '0'},{'name' : 'tommy', 'handle' : 'tommy#1413', 'flags' : '10' 'points' : '1000'},{'name' : 'rex', 'handle' : 'rex#1496', 'flags' : '0' 'points' : '0'}"