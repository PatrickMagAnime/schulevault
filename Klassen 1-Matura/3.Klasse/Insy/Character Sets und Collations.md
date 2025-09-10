[[3.Insy]]
___
**Character Sets und Collations**

*   **Character Sets (Zeichensätze):**
    *   Definition: Eine Sammlung von Zeichen und deren zugehörigen numerischen Codes.
    *   Beispiele:
        *   ASCII: Ein einfacher Zeichensatz für englische Zeichen, Zahlen und Symbole (7-Bit).
        *   Latin-1 (ISO-8859-1): Erweiterung von ASCII, enthält Zeichen für westeuropäische Sprachen (8-Bit).
        *   UTF-8: Ein variabler Unicode-Zeichensatz, der fast alle Zeichen der Welt darstellen kann. Sehr verbreitet im Web und in modernen Systemen.
        *   UTF-16: Ein weiterer Unicode-Zeichensatz (16-Bit oder 32-Bit).
    *   Bedeutung: Ermöglichen die korrekte Darstellung von Text in verschiedenen Sprachen.
*   **Collations (Sortierfolgen):**
    *   Definition: Regeln, die bestimmen, wie Zeichen verglichen und sortiert werden.
    *   Abhängigkeit: Eine Collation ist immer an einen bestimmten Character Set gebunden.
    *   Beispiele:
        *   `utf8_general_ci`: Eine Collation für den `utf8` Zeichensatz, die Groß-/Kleinschreibung ignoriert (`ci` steht für "case insensitive").
        *   `utf8_bin`: Eine Collation für den `utf8` Zeichensatz, die Zeichen binär vergleicht (Groß-/Kleinschreibung wird unterschieden).
    *   Bedeutung: Beeinflussen das Ergebnis von Sortieroperationen (`ORDER BY`) und Vergleichen (`WHERE`-Klauseln).
*   **Wichtige Überlegungen:**
    *   Datenbanken: Datenbanken verwenden Character Sets und Collations, um Textdaten korrekt zu speichern und zu verarbeiten.
    *   Webanwendungen: Webanwendungen müssen sicherstellen, dass Character Sets und Collations zwischen Datenbank, Server und Browser konsistent sind, um Anzeigefehler zu vermeiden.
    *   Inkompatibilitäten: Falsche Character Sets oder Collations können zu Problemen wie fehlerhafter Darstellung von Sonderzeichen oder falschen Sortierergebnissen führen.
*   **Beispiel (MySQL):**
    *   Character Set und Collation einer Datenbank ändern:

    ```sql
    ALTER DATABASE datenbankname CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
    ```

    *   Character Set und Collation einer Tabelle ändern:

    ```sql
    ALTER TABLE tabellenname CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
    ```

    *   Character Set und Collation einer Spalte ändern:

    ```sql
    ALTER TABLE tabellenname MODIFY spaltenname VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
    ```

*   **Zusammenhang mit [[3.Insy]]:**
    *   Verbindung zu Datenbanken: Im Kontext von Informationssystemen (INSY) sind Character Sets und Collations relevant, wenn es um die Speicherung und Verarbeitung von Textdaten in Datenbanken geht.
    *   Datenintegrität: Die korrekte Konfiguration von Character Sets und Collations ist entscheidend für die Datenintegrität und die korrekte Funktionalität von Anwendungen.
