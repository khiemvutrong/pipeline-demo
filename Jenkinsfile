def defaultTag = 'latest'
def image = '05121998/node-app'
def gitRrl = 'https://github.com/khiemvutrong/pipeline-demo.git'
def branch = 'dev'

node {
     def app 
     stage('clone repository') {
      checkout scm  
    }
     stage('Build docker Image'){
      app = docker.build("05121998/node-app")
    }
     stage('Test Image'){
       app.inside {
         sh 'echo "TEST PASSED"' 
      }  
    }
     stage('Push Image'){
       docker.withRegistry('https://registry.hub.docker.com', 'git') {            
       app.push("${env.BUILD_NUMBER}")            
       app.push("latest")   
   }
}