pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                // TODO: Add build steps here
                sh './gradlew assemble'
            }
        }
        stage('Test') {
            steps {
                // TODO: Add test steps here
                sh './gradlew test'
            }
        }
    }
}
