pipeline {
    agent any

    stages {

        stage("build") {

            steps {
                sh 'docker build -t pipeline .'
            }
        }

        stage("test") {

            steps {
                echo 'testing the application ... alo what are you doing?'
            }
        }

        stage('deploying') {
            steps {
                sh 'docker-compose up -d'
            }
        }
    }
}