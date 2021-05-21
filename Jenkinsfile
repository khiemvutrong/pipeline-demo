def defaultTag = 'latest'
def image = '05121998/node-app'
def gitRrl = 'https://github.com/khiemvutrong/pipeline-demo.git'

pipeline {
    agent any

    environment {
        GIT_COMMIT_ID = ""
        GIT_MESSAGE = ""
        GIT_USER = ""
        GIT_DATE = ""
        GIT_TAG = "test"
    }

    stages {
        //  stage('Checkout'){
        //     steps {
        //         git branch: branch, credentialsId: '3e5c3377-f7fc-4434-b059-ef385bf29404', url: gitRrl
        //         script {
        //             GIT_COMMIT_ID = sh (
        //                 returnStdout: true, script: "git log -n 1 --pretty=format:'%H'"
        //             ).trim()
                    
        //             GIT_MESSAGE = sh (
        //                 returnStdout: true, script: "git log -n 1 --pretty=format:'%s'"
        //             ).trim()
                    
        //             GIT_USER = sh (
        //                 returnStdout: true, script: "git log -n 1 --pretty=format:'%an'"
        //             ).trim()
                    
        //             GIT_DATE = sh (
        //                 returnStdout: true, script: "git log -n 1 --pretty=format:'%ad'"
        //             ).trim()

        //             def gitTag = sh (
        //                 returnStdout: true, script: "git tag -l --points-at HEAD"
        //             ).trim()

        //             if (gitTag?.trim()) {
        //                 GIT_TAG = gitTag
        //             } else {
        //                 GIT_TAG = defaultTag
        //             }
        //         }
        //     }
        // }

       stage('Docker Build, Push'){
            steps {
                dir ('./') {
                    withDockerRegistry(credentialsId: '3e5c3377-f7fc-4434-b059-ef385bf29404', url: ecrUrl) {
                        sh "docker build -t ${imageName} ."
                        sh "docker tag ${imageName}:latest ${imageName}:${GIT_TAG}"
                        sh "docker push ${imageName}:${GIT_TAG}"
                    }
                }
            }
        }

        stage("test") {

            steps {
                echo 'testing the application ... alo what are you doing?'
            }
        }

        stage('deploy') {

            steps {
                echo 'deploying the application ...'
            }
        }
    }
}