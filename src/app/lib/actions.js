"use server";
import { db } from "./db";

export async function submitAction(email) {
  await db.query(`INSERT INTO subscriptions(email) VALUES ($1)`, [email]);
}
