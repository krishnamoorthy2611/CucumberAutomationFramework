pipeline{
		agent any
			stages{
				stage ('Compile Stage'){
					steps{
						withMaven(maven : 'maven3.8.5') {
						sh 'mvn clean compile'
						}
					}
		
					}
				stage ('Testing Stage'){
					steps{
						withMaven(maven : 'maven3.8.5') {
						sh 'mvn test'
					}
				}
		
		}
		stage ('deployment Stage'){
		steps{
				withMaven(maven : 'maven3.8.5') {
					sh 'mvn deploy'
					}
				}
		}
	}
	}