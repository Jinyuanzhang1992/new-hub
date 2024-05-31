import "../footer/footer.scss";

function Footer(props) {
  const { year } = props;

  return (
    <footer>
      <p>&copy; {year} Jinyuan Zhang. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
