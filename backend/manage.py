#!/usr/bin/env python
"""Utility a riga di comando per attività amministrative di Django."""
import os
import sys


def main():
    os.environ.setdefault("DJANGO_SETTINGS_MODULE", "dinomoldo_backend.settings")
    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Impossibile importare Django. Assicurati che sia installato e "
            "disponibile nella variabile d'ambiente PYTHONPATH. Hai attivato "
            "un ambiente virtuale?"
        ) from exc
    execute_from_command_line(sys.argv)


if __name__ == "__main__":
    main()
