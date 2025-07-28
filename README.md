\# GRS Certification Dashboard for Garment Factories



An interactive dashboard designed to help garment factories understand and navigate the Global Recycled Standard (GRS) certification process. This tool provides key insights into recycled material requirements, supply chain traceability, environmental and social compliance, and the benefits of GRS certification, all tailored for the textile and apparel industry.



\## Features:

\- Visual representation of GRS certification tiers.

\- Key metrics related to recycled content, additives, and factory compliance.

\- Interactive modals providing detailed information on specific requirements (e.g., TCs, wastewater treatment, labor rights).

\- Progress indicators for industry targets (e.g., EU recycled textile mandate).

\- Benefits of GRS certification for garment factories.



\## Technologies Used:

\- React.js

\- Tailwind CSS (via CDN for simplicity)

\- Recharts (for data visualization)



\## How to Run Locally:

1\.  \*\*Clone or download this repository\*\* to your local machine.

2\.  \*\*Navigate to the project directory\*\* in your terminal:

    ```bash

    cd garment-grs-dashboard

    ```

3\.  \*\*Install dependencies:\*\*

    ```bash

    npm install

    # or

    yarn install

    ```

4\.  \*\*Start the development server:\*\*

    ```bash

    npm start

    # or

    yarn start

    ```

    This will open the dashboard in your browser at `http://localhost:3000`.



\## Deployment to GitHub Pages:

This project is configured for easy deployment to GitHub Pages.

1\.  Ensure your `package.json` `homepage` field is set correctly to your GitHub Pages URL (e.g., `https://YOUR\\\_GITHUB\\\_USERNAME.github.io/garment-grs-dashboard`).

2\.  Run the deploy script:

    ```bash

    npm run deploy

    # or

    yarn deploy

    ```

    This will build the app and push it to the `gh-pages` branch.

3\.  In your GitHub repository settings, go to "Pages" and select the `gh-pages` branch as the source for deployment.

