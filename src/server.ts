import express,{ Request, Response} from "express";
import * as validUrl from "valid-url";

import { filterImageFromURL, deleteLocalFiles } from "./util/util";

import * as dotenv from "dotenv";
dotenv.config();

(async () => {
  // Init the Express application
  const app = express();

  // Set the network port
  const port = process.env.PORT || 8082;

  // Use the inbuilt express middleware for post requests

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));


  // @TODO1 IMPLEMENT A RESTFUL ENDPOINT
  // GET /filteredimage?image_url={{URL}}
  // endpoint to filter an image from a public url.
  // IT SHOULD
  //    1
  //    1. validate the image_url query
  //    2. call filterImageFromURL(image_url) to filter the image
  //    3. send the resulting file in the response
  //    4. deletes any files on the server on finish of the response
  // QUERY PARAMATERS
  //    image_url: URL of a publicly accessible image
  // RETURNS
  //   the filtered image file [!!TIP res.sendFile(filteredpath); might be useful]

  /**************************************************************************** */

  //! END @TODO1

  app.get("/filteredimage", async (req: Request, res: Response) => {
    const imageUrl:string  = req.query.image_url;

    // validate the image_url query parameter
    if (!validUrl.isUri(imageUrl)) {
      return res.status(400).send({ error: "Invalid image URL" });
    }

    try {
      //call filterImageFromURL(image_url) to filter the image
      const filteredImagePath = await filterImageFromURL(imageUrl);

      //send the resulting file in the response
        res.status(200).sendFile(filteredImagePath, async (error: string | object) => {
        if (error) {
          res.status(400).send(error);
        }
        //  deletes any files on the server on finish of the response
        return await deleteLocalFiles([filteredImagePath]);
      });
    } catch (error) {
      // handle any errors that occurred in the try block
      return res.status(400).send({ error: error });
    }
  });

  // Root Endpoint
  // Displays a simple message to the user
  app.get("/", async (req, res) => {
    res.send("try GET /filteredimage?image_url={{}}");
  });

  // Start the Server
  app.listen(port, () => {
    console.log(`server running http://localhost:${port}`);
    console.log(`press CTRL+C to stop server`);
  });
})();
