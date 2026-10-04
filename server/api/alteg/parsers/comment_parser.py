import re

def parser_comment_alteg(raw_text: str):
    sluzba_match = re.search(
        r"Služba obsahuje:\s*(.*?)(?=Základní výbava obsahuje:|$)",
        raw_text,
        re.DOTALL
    )

    sluzba_list = []
    if sluzba_match:
        sluzba_list = [
            item.strip().rstrip(".")
            for item in sluzba_match.group(1).split(",")
            if item.strip()
        ]

    # 2. Второй массив: собираем элементы с дефисом
    vybava_list = [
        line.strip().lstrip("-").strip().rstrip(",")
        for line in raw_text.splitlines()
        if line.strip().startswith("-")
    ]

    return sluzba_list, vybava_list

