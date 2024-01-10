import React from "react";

const styles = {
  footer: {
    padding: "12px",
    backgroundColor: "#333",
    color: "#fff",
    textAlign: "center",
  },
  content: {
    maxWidth: "1200px",
    margin: "auto",
  },
};
export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.content}>
        <p>&copy; 2024 Cristal e-College. All rights reserved.</p>
        {/* Add more footer content as needed */}
      </div>
    </footer>
  );
}
