FROM python:latest

WORKDIR /api

COPY src/ .

RUN pip install fastapi
RUN pip install uvicorn

EXPOSE 8001

CMD python3 main.py