// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {avatar} from "../../../data"
import { NextResponse, NextRequest } from 'next/server'

export default function handler(req, res) {
    let id = req.query.id;

    const filtered = avatar.filter((data) => data._id === id) ?? null

    if (filtered.length > 0) {
        res.status(200).json(filtered[0])
    } else {
        // res.status(404).json({"message": "data not found"})
        res.redirect('/500');
    }
  }
  