pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                scripts{
                    build()
                }
            }
        }
        stage('Deploy to DEV') {
            steps {
                scripts{
                    deploy("DEV")
                }
            }
        }
        stage('Tests on DEV') {
            steps {
                scripts{
                    test("DEV")
                }
            }
        }
        stage('Deploy to STG') {
            steps {
                scripts{
                    deploy("STG")
                }
            }
        }
        stage('Tests on STG') {
            steps {
                scripts{
                    test("DEV")
                }
            }
        }
        stage('Deploy to PRD') {
            steps {
                scripts{
                    deploy("PRD")
                }
            }
        }
        stage('Tests on PRD') {
            steps {
                scripts{
                    test("DEV")
                }
            }
        }
    }
}

def deploy(String environment){
    echo 'Deployment to ${environment} has started..'
}

def test(String environment){
    echo 'Testing to ${environment} has started..'
}

def build(){
    echo 'Building of node application is starting..'
}