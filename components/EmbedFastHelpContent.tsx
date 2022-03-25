import * as React from "react";
import axios from "axios";
//import fs from "fs-extra";
import {
  Typography,
  H1,
  usePageData,
  Markdown,
  Alert,
  Link,
  H3,
} from "@redocly/developer-portal/ui";

import PropTypes from "prop-types";

export const FetchDataFromURL = (props) => {
  const [data, setData] = React.useState([]);
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [articleTitle, setArticleTitle] = React.useState("");
  const [articleBody, setArticleBody] = React.useState("");
  const [articleHtmlUrl, setArticleHtmlUrl] = React.useState("");

  const useAxios = props.useAxios === "true";

  React.useEffect(() => {
    const lowerCaseLocale = props.locale.toString().toLowerCase();

    const api_url = `https://${props.zendeskOrg}.zendesk.com/api/v2/help_center/${lowerCaseLocale}/articles/${props.articleId}`;

    const fetchData = async () => {
      try {
        setLoading(true);
        //const response = await axios.get(props.externalUrl);
        if (useAxios) {
          let response = await axios.get(api_url);
          let json = await response.data;
          setData(json);
          setArticleHtmlUrl(json.article.html_url);
          setArticleTitle(json.article.title);
          setArticleBody(json.article.body);
        } else {
          let response = await fetch(api_url);
          let json = await response.json();
          setData(json);
          setArticleHtmlUrl(json.article.html_url);
          setArticleTitle(json.article.title);
          setArticleBody(json.article.body);
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { data, error, loading, articleTitle, articleHtmlUrl, articleBody };
};

export function EmbedZendeskArticle(props) {
  const { data, loading, error, articleTitle, articleHtmlUrl, articleBody } =
    FetchDataFromURL(props);

  const lowerCaseLocale = props.locale.toString().toLowerCase();

  const help_center_url = `https://${props.zenDeskHelpCenterBaseUrl}/hc/${lowerCaseLocale}/articles/${props.articleId}`;

  const urlToShare = articleHtmlUrl.includes(help_center_url)
    ? help_center_url
    : articleHtmlUrl;

  const loadingFrom = props.loadingFrom
    ? "View external source (" + props.loadingFrom + ")."
    : "";

  const useAxios = props.useAxios === "true";

  const externalSourceHeader = useAxios
    ? "Content for this page loaded from external source using axios"
    : "Content for this page loaded from external source using fetch";

  if (error) {
    console.log(error);
  }

  return (
    <>
      {loading && <div>Loading...</div>}
      {data && (
        <div>
          <Alert variant="attention" header={externalSourceHeader}>
            <Link to={urlToShare} external>
              {loadingFrom}
            </Link>
          </Alert>
          <H1>{articleTitle}</H1>
          <Markdown source={articleBody} />
        </div>
      )}
    </>
  );
}

EmbedZendeskArticle.propTypes = {
  articleId: PropTypes.number.isRequired,
  zendeskOrg: PropTypes.string.isRequired,
  zenDeskHelpCenterBaseUrl: PropTypes.string.isRequired,
  locale: PropTypes.string.isRequired,
  loadingFrom: PropTypes.string.isRequired,
  useAxios: PropTypes.bool.isRequired,
};
