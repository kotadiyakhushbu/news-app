"use client";
import newsData from "./newsdata";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import { useState } from "react";
import Image from "next/image";

function Allnews() {
  const [open, setOpen] = useState(false);
  const [currentNews, setCurrentNews] = useState({ title: "", des: "" });

  const handleClickOpen = (news) => {
    setCurrentNews(news);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setCurrentNews({ title: "", des: "" });
  };

  return (
    <div>
      <div class="div-app-title-container">
        <Image
          class="img-title-logo"
          src="/images/new-app-logo.png"
          width={500}
          height={500}
          alt="logo"
        />
        <p class="MuiTypography-root MuiTypography-body1 app-title css-9l3uo3">
          News App
        </p>
      </div>
      <div class="div-grid-container">
        <div className="grid-contation">
          <Grid container>
            {newsData.map((news, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <div className="card">
                  <Card className="card-box">
                    <CardMedia
                      className="image"
                      image={news.img}
                      title={news.title}
                    />
                    <CardContent>
                      <Typography variant="body2">{news.title}</Typography>
                      <Typography variant="body2">{news.des}</Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        onClick={() => handleClickOpen(news)}
                        size="small"
                      >
                        VIEW DETAILS
                      </Button>
                    </CardActions>
                  </Card>
                </div>
              </Grid>
            ))}
          </Grid>

          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {currentNews.title}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                {currentNews.des}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Okay
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
    </div>
  );
}

export default Allnews;
