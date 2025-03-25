import React from "react";
import { Container, Table } from "react-bootstrap";
import data from "../data/ihht.json";
import Head from "next/head";

export default function PhysiologicalEffects() {
  return (
    <section className="reoxy-section">
      <Head>
        <title>Физиологични ефекти</title>
      </Head>
      {/* Short-term adaptation */}
      <div className="text-center py-4 bg-primary text-white">
        <h2>Краткосрочна адаптация към излагане на хипоксия</h2>
      </div>

      <Container className="my-4">
        <Table striped bordered hover responsive>
          <thead className="table-primary">
            <tr>
              <th>ОРГАНИ И СИСТЕМИ</th>
              <th>МЕХАНИЗЪМ</th>
              <th>ЕФЕКТ</th>
            </tr>
          </thead>
          <tbody>
            {data.short_term_adaptation.map((row, index) => (
              <tr key={`short-${index}`}>
                <td>{row.organ_system}</td>
                <td>
                  {row.mechanisms.map((m, i) => (
                    <div key={i}>{m}</div>
                  ))}
                </td>
                <td>
                  {row.effects.map((e, i) => (
                    <div key={i}>{e}</div>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>

      {/* Long-term adaptation */}
      <div className="text-center py-4 bg-primary text-white">
        <h2>Дългосрочна адаптация към излагане на хипоксия</h2>
      </div>

      <Container className="my-4">
        <Table striped bordered hover responsive>
          <thead className="table-primary">
            <tr>
              <th>ОРГАНИ И СИСТЕМИ</th>
              <th>МЕХАНИЗЪМ</th>
              <th>ЕФЕКТ</th>
            </tr>
          </thead>
          <tbody>
            {data.long_term_adaptation.map((row, index) => (
              <tr key={`long-${index}`}>
                <td>{row.organ_system}</td>
                <td>
                  {row.mechanisms.map((m, i) => (
                    <div key={i}>{m}</div>
                  ))}
                </td>
                <td>
                  {row.effects.map((e, i) => (
                    <div key={i}>{e}</div>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </section>
  );
}
