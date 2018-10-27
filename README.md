Context:
--
Cloud Architect Exam Candidates can expect several questions on deploying, updating, managing, debugging, and rolling back App Engine resources. Completing these steps end to end will provide hands on experience with this platform.



Scope
--
Create an App Engine deployment using this GitHub repo: <coming soon>.
Deploy the V1 branch of the app into production.
Update the app to the V2 branch code.
Under the Versions pane, set up a canary deployment by splitting traffic to 80%/20% for versions 1 and 2 respectively.
Rollback the app to V1.

The solution should include the following GCP services:

- Google Compute Engine

Steps
--
1. Open CloudShell in the GCP console.

2. Run `git clone <https repo url coming>` to clone this repo with the source code to your cloudshell instance.

3. Make sure to `cd GcpCaCertProject3` to navigate to the correct directory.

4. Take a look at the files in the app:
```
app.js  
app.yaml  
index.html  
package.json  
package-lock.json  
README.md
```

5. Let's test out the app and see how it works! Run `npm install` to install all the dependencies. Then, run `npm start` to start a dev server in your cloudshell. You should see the following:
```
App listening on port 8080
Press Ctrl+C to quit.
```

6. In the upper right corner of the cloudshell window, select the web preview button (immediately to the left of the three vertical dots). Choose to preview on port 8080, this will open a new browser window where you can see the app. If everything looks good, let move forward and deploy this with the App Engine.

7. In your cloudshell terminal, press `ctrl` and `c` to shut down the development server.

8. Run the command `npm run deploy`. Gcloud will generate a list of services to be generated. You will be asked `Do you want to continue (Y/n)?`. Enter `y` to continue.

9. Run `gcloud app browse` and the terminal will generate a url. It will look like this: `https://<project-id>.appspot.com`. Go to the link, and you should see the application.
