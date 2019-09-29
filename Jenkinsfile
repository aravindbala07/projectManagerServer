node {
    checkout scm

    docker.withRegistry('https://registry.hub.docker.com', 'dockerHub') {

        def customImage = docker.build("aravindbala07/aravindbala07/dockernodeapp")

        /* Push the container to the custom Registry */
        customImage.push()
    }
}
